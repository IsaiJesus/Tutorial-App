export default function OrderedTutorials(tutorials) {
  const orderedTutorials = tutorials.map(tutorial => {
    return {
      ...tutorial,
      createdAt: tutorial.createdAt ? new Date(tutorial.createdAt) : new Date(),
      updatedAt: tutorial.updatedAt ? new Date(tutorial.updatedAt) : new Date(),
    };
  })
  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return orderedTutorials;
}