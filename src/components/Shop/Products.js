import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "You Don't Know JS: ES6 and Beyond",
    price: 29,
    description: 'Even if you may not be a complete beginner at JavaScript, there are still lots to learn about this language. This book is part of the "You Don’t Know JS" series and focuses on ES6, the latest version of the JavaScript standard. You will learn all about the new ES6 syntax, organize code, express async flow control, leverage new API helpers, and lots more. It will also teach you how to use collections to work more efficiently with data.',
  },
  {
    id: "p2",
    title: "The Metamorphosis",
    price: 8,
    description: "With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosis has taken its place as one of the most widely read and influential works of twentieth-century fiction.",
  },
  {
    id: "p3",
    title: "Aesop's Fables",
    price: 7,
    description: "The fables of Aesop have become one of the most enduring traditions of European culture, ever since they were first written down nearly two millennia ago. Aesop was reputedly a tongue-tied slave who miraculously received the power of speech; from his legendary storytelling came the collections of prose and verse fables scattered throughout Greek and Roman literature. First published in English by Caxton in 1484, the fables and their morals continue to charm modern readers: who does not know the story of the tortoise and the hare, or the boy who cried wolf?",
  },
];
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Order your book now</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
