export const getAllUniversity = async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  console.log(data);

  res.status(200).json({
    success: true,
    data,
  });
};
