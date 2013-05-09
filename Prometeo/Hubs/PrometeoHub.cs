using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Prometeo.Models;

namespace Prometeo.Hubs
{
	[HubName("PrometeoHub")]
	public class PrometeoHub : Hub
	{
        public void ChangePage(Message message)
        {
            Clients.All.changePage(message);
        } 

        public void ChangePostNames(Message message)
		{
            Clients.All.changePostNames(message); 
		}

        public void ChangeCommentNames(Message message)
        {
            Clients.All.changeCommentNames(message);
        }

	}
}