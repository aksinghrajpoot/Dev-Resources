
  export default async function handler(req, res) {
    try {
        const data = require('../../database/database-flat.json')
        // Do stuff
        res.status(200).json(require('../../database/database-flat.json'))
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }