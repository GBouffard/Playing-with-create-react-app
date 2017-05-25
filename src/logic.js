const logic = {
  myString: 'this is my value',
  myArray: [1, 2, 3, 4, 5],
  myBoolean: false
};

logic.sum = (a, b) => a + b;
logic.toggleBoolean = () => {
  logic.myBoolean = !logic.myBoolean;
}

export default logic;