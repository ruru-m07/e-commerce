// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { fetchVerify } from '../../FetchFunc/fetchApi'
// import { login } from '../../store/storeSlice'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import Input from '../Input'
// import Button from '../Button'

// function Verification() {
//     const { register, handleSubmit, errors } = useForm()
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const onSubmit = async (data) => {
//         try {
//             const verified = await fetchVerify({ InpCode: data.codeInp })
//             console.log(verified);
//             if (verified) {
//                 dispatch(login(verified))
//                 navigate('/')
//             }
//         } catch (error) {
//             console.log("error in verification", error);
//         }
//     }

//     return (
//         <div>
//             <form onClick={handleSubmit(onSubmit)}>
//                 <Input
//                     type='text' placeholder='0 0 0 0'
//                     label='Enter your verifaction code'
//                     {...register('codeInp', {
//                         required: true
//                     })}
//                 />

//                 <Button
//                     type='submit'
//                     text='verify'
//                 />
//             </form>
//         </div>
//     )
// }

// export default Verification
