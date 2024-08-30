import { render } from "@testing-library/react";

const redux=()=>{
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
      };
}


describe('StudentList',()=>{
   it('should get the list of students',()=>{

    const initial={
        students: [{ id: 1, name: 'Anju John', email: 'anjujohn206@gmail.com' }],
    }
    const { getByText } =  { initial };
    expect(getByText(/Anju John/i)).toBeInTheDocument();
    expect(getByText(/anjujohn206@gmail.com/i)).toBeInTheDocument();
   });
});