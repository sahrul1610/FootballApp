using AngularApp1.Server.Data;
using AngularApp1.Server.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp1.Server.Service
{
    public class PositionsService : IPositionsService
    {
        private readonly FootballDbContext _context;

        public PositionsService(FootballDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Position>> GetPositionsList()
        {
            return await _context.Positions
                .OrderBy(x => x.DisplayOrder)
                .ToListAsync();
        }
    }
}
