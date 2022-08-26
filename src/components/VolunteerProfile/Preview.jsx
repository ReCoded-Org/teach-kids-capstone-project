export function Preview ({files}) {
  if (!files.length){
    return null;
  }

  return files.map(file=> {
    return (
      file => <img src={`//localhost:5000/${file.filename}`} alt={file.originalname} />
    )
  })
};
