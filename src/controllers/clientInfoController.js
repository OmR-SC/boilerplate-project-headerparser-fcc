const getClientInfo = (req, res) => {
  const { ip, headers } = req;

  const response = {
    ipaddress: ip,
    language: headers["accept-language"],
    software: headers["user-agent"],
  };
  res.json(response);
};

module.exports = { getClientInfo };
