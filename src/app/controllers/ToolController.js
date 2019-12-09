import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const { q, tags_like, page = 1 } = req.query
    let tools;

    if (q) {
      const search = new RegExp(q, 'i');
      tools = await Tool.find().or([{ title: search }, { tags: search }]).skip((page - 1) * 10).limit(10);
    } else if (tags_like) {
      const search = new RegExp(tags_like, 'i');
      tools = await Tool.find().where({ tags: search }).skip((page - 1) * 10).limit(10);
    } else {
      tools = await Tool.find().skip((page - 1) * 10).limit(10);
    }

    if (!tools.length) {
      return res.status(401).json({ message: 'There is not any tools' });
    }

    return res.json(tools);
  }

  async store(req, res) {
    const tool = await Tool.create(req.body);

    return res.json(tool);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Tool.findByIdAndDelete(id);

    return res.json();
  }
}

export default new ToolController();
