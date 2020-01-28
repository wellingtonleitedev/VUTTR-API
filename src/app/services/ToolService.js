import Tool from '../schemas/Tool';

class ToolService {
  async get({ filters = {}, page = 1 }) {
    return await Tool.paginate(filters, {
      page: page,
      limit: 5,
    });
  }

  async find({ q, tags_like, page }) {
    const filters = {};

    if (q) {
      filters.$or = [
        { title: new RegExp(q, 'i') },
        { tags: new RegExp(q, 'i') },
      ];
    } else if (tags_like) {
      filters.tags = new RegExp(tags_like, 'i');
    }

    return await this.get({ filters, page });
  }

  async create({ title, link, description, tags }) {
    this.verifyFields({ title, description, tags });

    const exist = await Tool.findOne({ where: { title } });

    if (exist) {
      throw new Error(`${title} already exists in list of tools`);
    }

    await Tool.create({ title, link, description, tags });

    return await this.get();
  }

  async update({ id, title, link, description, tags }) {
    await Tool.findByIdAndUpdate(
      id,
      { title, link, description, tags },
      { new: true }
    );

    return await this.get();
  }

  async delete({ id }) {
    await Tool.findByIdAndDelete(id);
    return await this.get();
  }

  verifyFields({ title, description, tags }) {
    if (!title || !description || (!tags && !tags.length)) {
      throw new Error('You need fill all required fields');
    }
  }
}

export default new ToolService();
