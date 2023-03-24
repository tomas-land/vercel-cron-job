export default function handler(req, res) {
  try {

    res.status(200).json({ name: 'endpoint success' })
  } catch (error){
    res.status(500).json({ name: 'John Doe' })
  }

}