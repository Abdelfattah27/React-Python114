# outline 
1. css
    1. regular css file with import  
    2. style object
    3. cssFile.module.css
2. form controllers 
    1.  input
    2.  textarea 
    3.  select 
3. binding state object (name , age example)
4. binding state array (add number example)

5. Class Component Life Cycle
    1.  Mounting Phase 
        1.  constructor
        2.  static getDerivedStateFromProps(props , states)
        3.  render
        4.  componentDidMount (change title)
    2. Updating Phase 
       1. static getDerivedStateFromProps (props , states)
       2. shouldComponentUpdate => bool 
       3. render
       4. componentDidUpdate
    3. un mounting phase
       1. componentWillUnmount
6. Function Component Life cycle 
   1. useEffect() `without dependencies`
   2. useEffect() `with dependencies`
   3. useEffect as ComponentWillUnmount
7. Basic CRUD operations app
