import "./style.css";

const SecondComponet = () => {
  const person1 = {
    name: "le ngoc huy",
    age: "24",
  };
  const nums = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="university" style={{ color: "blue" }}>
        HCMIU
      </div>
      <div>
        {JSON.stringify(person1)} {person1.age} {nums[1]}
      </div>
      <div>{console.log(person1.name)}</div>
      <div className="sid">ITITIU21056</div>
    </>
  );
};

export default SecondComponet;
