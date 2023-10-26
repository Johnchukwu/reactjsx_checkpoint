
import Name from './Name';
import Price from './Price';
import  Image from './Image'
import Description from './Description';
import productData from './Product';
import './App.css'

const firstName = "John";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Image image={productData.image} />
        <div className="card-body">
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </div>
      </div>
      <div className="greeting">
        <p>Hello, {firstName ? firstName : 'there'}!</p>
        {firstName && <Image image={productData.image}  />}
      </div>
    </div>
  );
}

export default App;
