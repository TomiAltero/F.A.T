'use server';

export async function registerUserAction(prevState: any, formData: FormData){
    console.log('Hello world from User Action')
    
    const fields = Object.fromEntries(formData.entries())
    
    return {
        ...prevState,
        data: fields,
    }
}