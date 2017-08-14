export * from './userActions';

export const changeText = (text) => {
  return {
    type: 'CHANGE_TEXT',
    text
  };
};
