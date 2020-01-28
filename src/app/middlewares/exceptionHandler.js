import Youch from 'youch';

export default async (err, req, res, next) => {
  const { error } = await new Youch(err, req).toJSON();

  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json(error);
  }

  const dto = {
    name: error.name,
    message: error.message,
  };

  switch (error.name) {
    case 'Error':
      return res.status(500).json(dto);
    case 'SequelizeUniqueConstraintError':
      return res
        .status(500)
        .json({ name: 'Error', message: 'E-mail already in use' });
    default:
      return res
        .status(500)
        .json({ name: error.name, message: 'Internal Server Error' });
  }
};
