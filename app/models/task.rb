require 'csv'

class Task < ApplicationRecord
  belongs_to :user

  def self.to_csv
    attributes = %w{name status}

    CSV.generate(headers: true) do |csv|
      csv << %w{Name Status}
      all.each do |task|
        csv << attributes.map do |attr| 
          if attr == "status"
            task.send(attr) == 0 ? "Pending" : "Done"
          else
            task.send(attr) 
          end
        end
      end
    end
  end

end
