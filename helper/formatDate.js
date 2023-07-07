const formatDate = dateStr => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const [{ value: day }, , { value: month }, , { value: year }] =
    formatter.formatToParts(date);

  return `${day} ${month} ${year}`;
};

console.log(formatDate('01-10-2023')); // Output: "10 Jan 2023"

export default formatDate;
