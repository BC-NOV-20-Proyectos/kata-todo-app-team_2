class ProfileController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_login

  def home 
  end
  
end
