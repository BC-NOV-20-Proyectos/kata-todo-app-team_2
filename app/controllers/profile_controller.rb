class ProfileController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_login

  def show
    @user = User.select(:id,:email,:name,:description).where(id: current_user.id)[0]
    user = User.find(current_user.id)
    render json: {
      :user => @user,
      :picture_link => url_for(user.profile_picture),
    }
  end

  def update
    user_data = {current_user.id => profile_params}
    User.update(user_data.keys,user_data.values)
  end

  def update_picture
    user = User.find(current_user.id)
    user.profile_picture.attach(params[:profile_picture])
  end

  private 
    def profile_params
      params.permit(:name,:email,:description,:profile_picture)
    end
end
