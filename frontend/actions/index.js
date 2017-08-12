export * from './user';

export const changeText = (text) => {
  return {
    type: 'CHANGE_TEXT',
    text
  };
};
