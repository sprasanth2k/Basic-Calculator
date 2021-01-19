var cur,prev,op,temp;
cur="",prev="",op="";


function addback(x)
{
    if(x=="point")
    {
        var i;
        for(i=0;i<cur.length;i++)
        {
            if(cur[i]==".")
                break;
        }
        if(i==cur.length)
            cur=cur+".";
    }
    else
    {
        cur=cur+x;
    }
    document.getElementById("current").innerHTML=cur;
}

function operator(x)
{
    if(cur=="")
    {
        if(op!="")
        {
            if(x=="plus")
                op="+";
            else if(x=="minus")
                op="-";
            else if(x=="multiply")
                op="*";
            else if(x=="divide")
                op="/";
        }
        document.getElementById("previous").innerHTML=prev+" "+op;
        cur="";
        document.getElementById("current").innerHTML=cur;
    }
    else if(cur==".")
    {
        cur="";
        prev="";
        document.getElementById("previous").innerHTML="";
        document.getElementById("current").innerHTML="Invalid";
    }
    else
    {
        if(x=="plus")
        {
            if(prev=="")
            {
                prev=cur;   
            }
            else
            {
                if(op=="+")
                {
                    prev=parseFloat(prev)+parseFloat(cur);
                }
                else if(op=="-")
                {
                    prev=parseFloat(prev)-parseFloat(cur);
                }
                else if(op=="*")
                {
                    prev=parseFloat(prev)*parseFloat(cur);
                }
                else if(op=="/")
                {
                    prev=parseFloat(prev)/parseFloat(cur);
                }
            }
            op="+";
        }
        else if(x=="minus")
        {
            if(prev=="")
            {
                prev=cur;   
            }
            else
            {
                if(op=="+")
                {
                    prev=parseFloat(prev)+parseFloat(cur);
                }
                else if(op=="-")
                {
                    prev=parseFloat(prev)-parseFloat(cur);
                }
                else if(op=="*")
                {
                    prev=parseFloat(prev)*parseFloat(cur);
                }
                else if(op=="/")
                {
                    prev=parseFloat(prev)/parseFloat(cur);
                }
            }
            op="-";
        }
        else if(x=="multiply")
        {
            if(prev=="")
            {
                prev=cur;   
            }
            else
            {
                if(op=="+")
                {
                    prev=parseFloat(prev)+parseFloat(cur);
                }
                else if(op=="-")
                {
                    prev=parseFloat(prev)-parseFloat(cur);
                }
                else if(op=="*")
                {
                    prev=parseFloat(prev)*parseFloat(cur);
                }
                else if(op=="/")
                {
                    prev=parseFloat(prev)/parseFloat(cur);
                }
            }
            op="*";
        }
        else if(x=="divide")
        {
            if(prev=="")
            {
                prev=cur;   
            }
            else
            {
                if(op=="+")
                {
                    prev=parseFloat(prev)+parseFloat(cur);
                }
                else if(op=="-")
                {
                    prev=parseFloat(prev)-parseFloat(cur);
                }
                else if(op=="*")
                {
                    prev=parseFloat(prev)*parseFloat(cur);
                }
                else if(op=="/")
                {
                    prev=parseFloat(prev)/parseFloat(cur);
                }
            }
            op="/";
        }
        document.getElementById("previous").innerHTML=prev+" "+op;
        cur="";
        document.getElementById("current").innerHTML=cur;
    }
    
}

function equals()
{
    if(cur=="")
    {
        if(prev!="")
        {
            document.getElementById("previous").innerHTML="";
            document.getElementById("current").innerHTML="Invalid";
            prev="";
            cur="";
        }
    }
    else
    {
        if(prev!="")
        {
            if(op=="+")
            {
                prev=parseFloat(prev)+parseFloat(cur);
            }
            else if(op=="-")
            {
                prev=parseFloat(prev)-parseFloat(cur);
            }
            else if(op=="*")
            {
                prev=parseFloat(prev)*parseFloat(cur);
            }
            else if(op=="/")
            {
                prev=parseFloat(prev)/parseFloat(cur);
            }
            document.getElementById("previous").innerHTML="";
            document.getElementById("current").innerHTML=prev;
            cur="";
        }
    }
}

function del()
{
    cur=cur.slice(0,-1);
    document.getElementById("current").innerHTML=cur;
}

function allclear()
{
    document.getElementById("previous").innerHTML="";
    document.getElementById("current").innerHTML="";
    cur="";
    prev="";
    flag1=1;
}