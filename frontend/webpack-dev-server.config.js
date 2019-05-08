const URL = require('url').URL;
const express = require('express');

module.exports = app => {
  app.get('test', (req, res) => {
    handleRequest(() => res.status(200).send({ test: 'websocket' }), req);
  });
};
