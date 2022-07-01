import React from 'react'

function Form() {
    const FormFlex = {
        Input() {
            return <input />
        },
        Checkbox() {
            return <input type="checkbox" />
        }
    }
    /** gia su dang co 1 component form va muon linh hoat cai form nay thi lam nhu the nao ?
     *  va sau do se goi nhu the nay
     *     return (<div> <FormFlex.Input /></div>)
     * vay dat truong hop minh muon dat 1 cai bien va thay doi no theo cai bien truyen vao thi lam sao ?
     * const type = 'Input'
     * <Form[type]/>, khong lam nhu vay dc, se xay ra loi
     * cach giai quyet : const Component = FormFlex[type]
     */
    const type = 'Checkbox';
    const Component = FormFlex[type];

    return (
        <div>
            <Component />
        </div>
    )
}

export default Form