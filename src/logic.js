const logic = {
  myString: 'this is my value',
  myArray: [1, 2, 3, 4, 5],
  myBoolean: false,
  myNumber: 1
};

logic.sum = (a, b) => a + b;
logic.toggleBoolean = () => {
  logic.myBoolean = !logic.myBoolean;
}
logic.addToNumber = () => {
  logic.myNumber += 1;
}
logic.substractToNumber = () => {
  logic.myNumber -= 1;
}

export default logic;