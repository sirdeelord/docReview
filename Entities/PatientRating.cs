using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace docReview.Entities
{
    public class PatientRating
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DoctorId { get; set; }
        public string Comments { get; set; }
        public int Rating { get; set; }
    }
}