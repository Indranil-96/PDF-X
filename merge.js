import merger from 'pdf-merger-js';


const mergepdfs=async(p1,p2)=>{
    await merger.add(p1)
    await merger.add(p2)
}


module.exports={mergepdfs};
