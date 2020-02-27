const Bootcamp=require('./../models/Bootcamp');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({success:true,msg:'Show all bootcamps'})
}
//@desc Get bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Show bootcamp ${req.params.id}`})
}
//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//@access PRIVATE
exports.createBootcamp=async (req,res,next)=>{
    try{
    const bootcamp= await Bootcamp.create(req.body);
    res.status(201).json({success:true,data:bootcamp})
    }catch(err){
        res.status(400).json({success:false});
    }
}
//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access PRIVATE
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamp: ${req.params.id}`})
}
//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access PRIVATE
exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete Bootcamp: ${req.params.id}`})
}