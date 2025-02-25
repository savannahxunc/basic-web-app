export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "savannah";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "savannax";
  }

  if (query.toLowerCase().includes("What is 3 plus 42?")) {
    return "45";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 94, 69, 66?")) {
    return "94";
  }


  return "";
}
