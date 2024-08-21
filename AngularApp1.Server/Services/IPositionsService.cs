using AngularApp1.Server.Models;

namespace AngularApp1.Server.Service
{
    public interface IPositionsService
    {
        Task<IEnumerable<Position>> GetPositionsList();
    }
}
