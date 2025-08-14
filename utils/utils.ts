const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Next.js-Tailwind-CSS-Portfolio-Template/": "";
};

export { getImagePrefix };
 