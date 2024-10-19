
const mergePDF= async(p1, p2)=>{
  const { default: PDFMerger } = await import('pdf-merger-js');
  const merger=new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  await merger.save('public/merged.pdf');
}

module.exports=mergePDF;
