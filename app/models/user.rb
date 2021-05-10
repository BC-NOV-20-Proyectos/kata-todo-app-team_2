class User < ApplicationRecord
  include Clearance::User

  include Clearance::User
  has_many :tasks
  has_one_attached :profile_picture do |attachable|
    attachable.variant :thumb, resize: "240x240"
  end
end
