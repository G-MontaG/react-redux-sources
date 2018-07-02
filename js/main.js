const secondComponent = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      {
        style: {
          'font-size': props.fontSize
        }
      },
      'Second component'
    )
  );
};

const firstComponent = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'My first component!!!'),
    React.createElement(secondComponent, {
      fontSize: 18
    }),
    React.createElement(secondComponent, {
      fontSize: 16
    }),
    React.createElement(secondComponent, {
      fontSize: 14
    })
  );
};

ReactDOM.render(
  React.createElement(firstComponent),
  document.getElementById('app')
);
