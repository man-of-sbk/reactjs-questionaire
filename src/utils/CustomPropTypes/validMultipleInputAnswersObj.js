export const validMultipleInputAnswersObj = (
  allPassedProps,
  currentValidatedPropName,
  currentComponentName
) => {
  const currentValidatedProp = allPassedProps[currentValidatedPropName];
  const arrOfObj = arr => !arr.some(ele => typeof ele !== "object");

  if (
    currentValidatedProp === undefined ||
    !Array.isArray(currentValidatedProp)
  ) {
    throw new Error(
      `The prop "${currentValidatedPropName}" is marked as required as well as to be an array, but its value is "${currentValidatedProp}" (in "${currentComponentName}" component).`
    );
  }

  if (!arrOfObj(currentValidatedProp)) {
    throw new Error(
      `The prop "${currentValidatedPropName}" is supposed to be an "array of objects" (in "${currentComponentName}" component).`
    );
  }

  currentValidatedProp.forEach(answer => {
    if (answer.value === undefined || answer.content === undefined) {
      throw new Error(
        `each property of "${currentValidatedPropName}" prop should contain both "value" as well as "content" properties (in "${currentComponentName}" component).`
      );
    }

    if (typeof answer.value !== "string") {
      throw new Error(
        `property "value" of each property of "${currentValidatedPropName}" prop is supposed to be a string (in "${currentComponentName}" component).`
      );
    }

    if (typeof answer.content !== "string") {
      throw new Error(
        `property "content" of each property of "${currentValidatedPropName}" prop is supposed to be a string (in "${currentComponentName}" component).`
      );
    }
  });
};
