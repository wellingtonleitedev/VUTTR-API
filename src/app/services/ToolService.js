import Tool from '../schemas/Tool';

class ToolService {
  constructor() {
    this.params = {
      currentPage: 1,
      lastPage: 1,
      totalTools: 1,
      filters: {},
    };
  }

  async getTools() {
    const tools = await Tool.paginate(this.params.filters, {
      page: this.params.currentPage,
      limit: 5,
    });

    this.params = {
      ...this.params,
      currentPage: tools.page,
      lastPage: tools.pages,
      totalTools: tools.total,
    };

    return tools;
  }

  async find({ q, tags_like, page = 1 }) {
    const filters = {};

    if (q) {
      filters.$or = [
        { title: new RegExp(q, 'i') },
        { tags: new RegExp(q, 'i') },
      ];
    } else if (tags_like) {
      filters.tags = new RegExp(tags_like, 'i');
    }

    this.params = {
      ...this.params,
      filters,
      currentPage: page,
    };

    const tools = await this.getTools();

    return tools;
  }

  async create({ title, link, description, tags }) {
    this.verifyFields(title, description, tags);

    const exist = await Tool.findOne({ where: { title } });

    if (exist) {
      throw new Error(`${title} already exists in list of tools`);
    }

    await Tool.create({ title, link, description, tags });

    const total = this.params.totalTools + 1;
    this.params = {
      ...this.params,
      currentPage: Math.ceil(total / 5),
    };

    const tools = await this.getTools();

    return tools;
  }

  async update({ id, title, link, description, tags }) {
    this.verifyFields(title, description, tags);

    await Tool.findByIdAndUpdate(
      id,
      { title, link, description, tags },
      { new: true }
    );

    const tools = await this.getTools();
    return tools;
  }

  async delete({ id }) {
    await Tool.findByIdAndDelete(id);

    const total = this.params.totalTools - 1;
    this.params = {
      ...this.params,
      currentPage: Math.ceil(total / 5),
    };

    const tools = await this.getTools();
    return tools;
  }

  verifyFields(title, description, tags) {
    if (!title || !description || !(tags && tags.length)) {
      throw new Error('You need fill all required fields');
    }
  }
}

export default new ToolService();
