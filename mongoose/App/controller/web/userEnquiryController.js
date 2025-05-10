let  enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res)=>{

    let {sName, sEmail, sPhone, sMessage} = req.body;
    let enquiry = new enquiryModel({
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    });
    enquiry.save().then((result)=>{
        res.send({status:1, msg:"Enquiry Saved", data:result});
    }).catch((err)=>{
        res.send({status:2, msg:"Enquiry Not Saved", data:err});
    })
}

let enquiryList =  async (req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({status:1, entries:enquiryList.length, msg:"Enquiry List", data:enquiryList});
}

let enquiryDelete = async(req, res)=>{
    let enquiryId = req.params.id;
    let deleteEnquiry = await enquiryModel.deleteOne({_id: enquiryId}); 
    res.send({status:1, msg:"Enquiry Deleted", data:enquiryId, delRes:deleteEnquiry});
}

let enquiryUpdate = async(req, res)=>{
    let enquiryId = req.params.id;
    let {sName, sEmail, sPhone, sMessage} = req.body;
    let updateObj = {
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    };
    let updateEnquiry = await enquiryModel.updateOne({_id: enquiryId}, updateObj);
    
    res.send({status:1, msg:"Enquiry Updated", data:enquiryId, updateRes:updateEnquiry});
}

module.exports = {enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate};