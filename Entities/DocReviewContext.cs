using Microsoft.EntityFrameworkCore;

namespace docReview.Entities
{
    public class DocReviewContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<DoctorSpecialty> DoctorSpecialties { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<MedicalSchool> MedicalSchools { get; set; }
        public DbSet<PatientRating> PatientRatings { get; set; }
        public DbSet<Specialty> Specialties { get; set; }
        
        public DocReviewContext(DbContextOptions<DocReviewContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}