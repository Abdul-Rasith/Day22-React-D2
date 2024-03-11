import "./App.css";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Phone Support",
          enabled : false
        },
        {
          name: "Dedicated Phone Support",
          enabled : false
        },
        {
          name: "Free Subdoman",
          enabled : false
        },
        {
          name: "Monthly status Reports",
          enabled : false
        },
      ],
    },
    {
      planName: "PLUS",
      price: 9,
      features: [
        {
          name: "5 UserS",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Project",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Project",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Subdoman",
          enabled : true
        },
        {
          name: "Monthly status Reports",
          enabled : false
        },
      ],
      buttonFocus : false
    },
    {
      planName: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited UserS",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Subdoman",
          enabled : true
        },
        {
          name: "Monthly status Reports",
          enabled : true
        },
      ],
      buttonFocus : true,
      boxFocus : true
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;