using System;

namespace UserManagement
{
    class User
    {
        public static void Testing()
        {
            Console.WriteLine("Testing from UserManagement");
        }

        public void Printing()
        {
            Console.WriteLine("Print from UserManagement");
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        UserManagement.User user = new UserManagement.User();
        user.Printing();
        UserManagement.User.Testing();
    }
}