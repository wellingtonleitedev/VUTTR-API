import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const { q, tags_like, page } = req.query;
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
      page: page || 1,
      limit: 5,
    });

    if (!tools.total) {
      return res.status(401).json({ tools, message: 'There is not any tools' });
    }

    return res.json(tools);
  }

  async store(req, res) {
    const tool = await Tool.create(req.body);

    return res.json(tool);
  }

  async update(req, res) {
    const { id } = req.params;

    const tool = await Tool.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(tool);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Tool.findByIdAndDelete(id);

    return res.json();
  }
}

export default new ToolController();
