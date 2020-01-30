import Tool from '../schemas/Tool';

class ToolService {
  constructor() {
    this.currentPage = 1;
    this.lastPage = 1;
  }

  async getTools() {
    const tools = await Tool.paginate({}, {
      page: this.currentPage,
      limit: 5,
    });

    this.lastPage = tools.pages;
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

    const tools = await Tool.paginate(filters, {
      page: page || this.currentPage,
      limit: 5,
    });

    this.currentPage = tools.page;
    this.lastPage = tools.pages;

    return tools;
  }

  async create({ title, link, description, tags }) {
    this.verifyFields(title, description, tags);

    const exist = await Tool.findOne({ where: { title } });

    if (exist) {
      throw new Error(`${title} already exists in list of tools`);
    }

    await Tool.create({ title, link, description, tags });

    this.currentPage = this.lastPage;
    return await this.getTools();
  }

  async update({ id, title, link, description, tags }) {
    this.verifyFields(title, description, tags);

    await Tool.findByIdAndUpdate(
      id,
      { title, link, description, tags },
      { new: true }
    );

    return await this.getTools();
  }

  async delete({ id }) {
    await Tool.findByIdAndDelete(id);
    return await this.getTools();
  }

  verifyFields(title, description, tags) {
    if (!title || !description || (!tags && !tags.length)) {
      throw new Error('You need fill all required fields');
    }
  }
}

export default new ToolService();
