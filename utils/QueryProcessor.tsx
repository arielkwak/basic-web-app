export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("yejunk")) {
    return (
      "Ariel Kwak's Andrew ID"
    );
  }

  if (query.toLowerCase().includes("what is your name?")){
    return (
      "Ariel"
    );
  }

  if (query.toLowerCase().includes("plus")){
    const queryString = query.toLowerCase();
    const numbers = queryString.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      return "" + (num1 + num2);
    } else {
      // Handle the case where two numbers couldn't be extracted.
      return "Could not extract two numbers from the query.";
    }
  }

  if (query.toLowerCase().includes("multiply")){
    const queryString = query.toLowerCase();
    const numbers = queryString.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      return "" + (num1 * num2);
    } else {
      // Handle the case where two numbers couldn't be extracted.
      return "Could not extract two numbers from the query.";
    }
  }

  return "";
}
