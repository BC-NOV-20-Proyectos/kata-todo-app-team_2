class ApplicationController < ActionController::Base
  include Clearance::Controller

  def is_auth
    if !signed_in?
      head 403
    end
  end
end
