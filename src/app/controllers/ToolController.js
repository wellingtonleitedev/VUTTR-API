import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const tools = await Tool.find();

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
