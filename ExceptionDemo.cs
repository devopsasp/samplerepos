using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
namespace ExceptionDemo
{

    class AgeException : ApplicationException
    {
        int age;
      public  AgeException(int age) : base("invalid age " + age)
        {
        this.age=age;
        }
        public void printmessage()
        {
            Console.WriteLine("Invalid Age entered");
        }
    }
    class Candidate
    {
           public void acceptage(int age)
        {
             if(age<18)
            {
                throw new AgeException(age);
            }
             else
            {
                Console.WriteLine("Age is accepted");
            }
        }
    }
    class Program
    {

           
        
        public static void Main(string[] args)
        {
            Candidate obj = new Candidate();
            try
            {
                obj.acceptage(15);
            }
            catch(AgeException e)
            {
              e.printmessage();
            }
            Console.ReadKey();

             }
    }
}


