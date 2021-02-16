const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../Model/User')


const axios=require('axios')

exports.login=async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user=await User.findOne({email:email});
        if(user){
            const isMatch=await bcrypt.compare(req.body.password,user.password);
            const token= await user.generateAuthToken();
            if(isMatch){
                // res.status(200).send("logged in successfully!");
                res.status(200).json({
                    message: "logged in successfully!",
                    token:token
                })
            }
            else{
                res.status(403).json({
                    error:"incorrect password!"
                })
            }
        }
        else{
            res.status(403).json({
                message:"email does not exist!"
            })
        }
    }

    
       
    catch(err){
        res.status(400).json({
            message:'error fetching user details!'
        })
    }
}
        // const email=req.body.email;
        // const password=req.body.password;
        //  User.findOne({email:email})
        //  .then((user)=>{
        //     if(user){
    
        //         bcrypt.compare(req.body.password,user.password)
        //         .then((result)=>{
        //             if(result){
                        
        //                 let token=jwt.
                        
        //                 res.status(200).json({
        //                     message: "logged in successfully!",
                            
        //                 })
        //             }
        //             else{
        //                 res.status(403).json({
        //                     error:"incorrect password!"
        //                 })
        //             }
        //         })
        //     }
        //     else{
        //         res.status(403).json({
        //             message:"email does not exist!"
        //         })
        //     }
        // })
        // .catch((err)=>{
        //     res.status(405).json({
        //         message:'error fetching user details!'
        //     })
        // })
    
    
    

    
    

// const authenticate = (req,res,next)=>{
//     if(typeof(req.headers.authorization)=='undefined'){
//         res.status(401).json({
//             message:'Authorization token required!'
//         })
//     }
//     const token = req.headers.authorization.split(' ')[1]
//     jwt.verify(token,process.env.JWT_KEY, (err,decode)=>{
//         if(err){
//             if(err.name=="TokenExpiredError"){
//                 res.status(420).json({
//                     message:"Authentication Timeout!"
//                 })
//             }
//             else{
//           

//                 res.status(421).json({
//                     message:"Authentication Failed!"
//                 })
//             }
//         }
//         else{
//             req.user = decode
//             next()
//         }
//     })

// }


exports.signUp=async(req,res,next)=>{
    try{
        const password=req.body.password;
        const cnfmpassword=req.body.cnfmpassword;
        if(password===cnfmpassword){
            const userRegister=new User({
                email:req.body.email,
                password:req.body.password,
                cnfmpassword:req.body.cnfmpassword
            })

            const token= await userRegister.generateAuthToken();
            // res.cookie("jwt",token);
            // console.log(cookie);

            const result=await userRegister.save();
            res.status(200).json({
                message: "Successfully registered",
                token:token
            })   
                // })send("Successfully registered");
        }
        else{
            res.send("password not matching");
        }
    }
    catch(error){
res.status(400).send(error);
    }
}

// module.exports={login,signUp}