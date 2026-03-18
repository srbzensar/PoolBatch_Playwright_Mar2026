function demo()
{
    if(true)
    {
        var a = 1; let b = 2; const c = 3;
    }
    console.log(a); // 1
    // console.log(b); // Error: b is not defined
    // console.log(c); // Error: c is not defined
}

demo();
