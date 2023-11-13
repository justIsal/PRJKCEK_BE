const Tiket= require('../models/TiketModels');

exports.createTiket = async(req,res) => {
    try{
        console.log(req.body)
        const tiket = new Tiket({...req.body});
        await tiket.save();
        res.status(201).json(tiket);
    }catch(err){
        res.status(500).json({error: "Failed to create Tiket"});
        console.log(req.body)
        console.log(err)
    }
}
exports.getAllTikets = async (req, res) => {
	try {
		const tikets = await Tiket.find({});
		res.status(200).json(tikets);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch tikets' });
	}
};
exports.getTiketById = async (req, res) => {
	try {
		const tiket = await Tiket.findById(req.params.id);
		if (!tiket) {
			return res.status(404).json({ error: 'Tiket not found' });
		}
		res.status(200).json(tiket);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch tiket' });
	}
};

exports.updateTiket = async (req, res) => {
	try {
		const tiketData = req.body;
		const tiket = await Tiket.findByIdAndUpdate(req.params.id, tiketData, {
			new: true,
		});
		if (!tiket) {
			return res.status(404).json({ error: 'tiket not found' });
		}
		res.status(200).json(tiket);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update tiket' });
	}
};

exports.deleteTiket = async (req, res) => {
	try {
		const tiket = await Tiket.findByIdAndDelete(req.params.id);
		if (!tiket) {
			return res.status(404).json({ error: 'tiket not found' });
		}
		res.status(200).json({ message: 'tiket deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete tiket' });
	}
};
