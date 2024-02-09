const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			API_KEY: process.env.API_KEY,
			API_SECRET: process.env.API_SECRET,
		});
	} catch (error) {
		console.log(error);
	}
};