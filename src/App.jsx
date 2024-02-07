import "./App.css";
import Calculator from "./components/Calculator";
import Input from "./components/Input";
// import Key from "./components/Key";

function App() {
	return (
		<>
			{/* <table>
				<tbody>
					<tr>
						<td>
              
							<Input />
						</td>
					</tr>
					<tr>
						<td>
							<Key number={1} />
						</td>
						<td>
							<Key number={2} />
						</td>
						<td>
							<Key number={3} />
						</td>
					</tr>
					<tr>
						<td>
							<Key number={4} />
						</td>
						<td>
							<Key number={5} />
						</td>
						<td>
							<Key number={6} />
						</td>
					</tr>
					<tr>
						<td>
							<Key number={7} />
						</td>
						<td>
							<Key number={8} />
						</td>
						<td>
							<Key number={9} />
						</td>
					</tr>
				</tbody>
			</table> */}
			<Calculator />
			
		</>
	);
}

export default App;
